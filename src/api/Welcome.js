export default async function handler(req, res) {
  try {
    const data = await fetchEdgeConfigData("greeting");

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function fetchEdgeConfigData(key) {
  const response = await fetch(
    `https://edge-config.vercel.com/v1/configs/${process.env.NEXT_PUBLIC_VERCEL_EDGE_CONFIG_ID}/items/${key}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_EDGE_CONFIG_DIGEST}`,
      },
    }
  );

  console.log(response);

  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
}
