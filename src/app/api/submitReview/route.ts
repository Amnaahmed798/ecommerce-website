// pages/api/submitReview.ts

// app/api/submitReview/route.ts

import { NextResponse } from 'next/server';
import sanityClient from '@sanity/client';

const sanity = sanityClient({
  projectId: '2fyyyoq0',  // Replace with your actual Sanity project ID
  dataset: 'production',  // Replace with your actual dataset name
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,  // Use environment variables for your Sanity API token
});

// Handle POST requests
export async function POST(request: Request) {
  try {
    const { productId, review } = await request.json();

    if (!productId || !review) {
      return NextResponse.json({ error: 'Product ID or review missing' }, { status: 400 });
    }

    // Insert the new review into the product's review array
    await sanity
      .patch(productId) // Patch the specific product by its ID
      .setIfMissing({ reviews: [] }) // Ensure the reviews field exists
      .insert('after', 'reviews[-1]', [review]) // Insert the review after the last review
      .commit();

    return NextResponse.json({ message: 'Review submitted successfully!' });
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
  }
}
