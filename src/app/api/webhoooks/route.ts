import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';
import { api } from '../../../../convex/_generated/api';
import { ConvexHttpClient } from 'convex/browser';
import type { UserJSON } from '@clerk/backend';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
      throw new Error('Missing Convex URL');
    }

    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    const evt = await verifyWebhook(req);

    console.log(`Webhook received: ${evt.type}`);
    console.log('Payload:', evt.data);

    if (evt.type === 'user.created') {
      const user = evt.data as UserJSON;

      const clerkId = user.id;
      const email = user.email_addresses?.[0]?.email_address ?? '';

      await convex.mutation(api.registeration.createUser, {
        clerkId,
        email,
        role: 'resident',
      });

      console.log('Synced user to Convex:', clerkId);
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Webhook error:', err);
    return new Response('Webhook failed', { status: 400 });
  }
}
