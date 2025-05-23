// src/routes/+page.js

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {

  const { storyblokAPI, isPreview } = await parent();

  const response = await storyblokAPI.get(`cdn/stories/${params.slug || "home"}`, {
    version: isPreview ?  "draft" : "published"
  })

  return {
    story: response.data.story,
  };
}

