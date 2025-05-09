import Merch from "../models/merchModel.mjs";

// Our Mock Data Seed
async function seed(req, res) {
  try {
    await Merch.create([
      {
        name: "Pastria Apron",
        description: "A stylish apron for all your baking needs.",
        price: 25.0,
        imageUrl:
          "https://images.unsplash.com/photo-1729774092032-31b9e3a4e368?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Kitchen Gear",
      },
      {
        name: "Pastria Mug",
        description: "Enjoy your favorite beverage with a touch of Pastria.",
        price: 14.0,
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1673422506808-ad558246598a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Drinkware",
      },
      {
        name: "Pastria Recipe Book",
        description: "A curated collection of our sweetest pastry secrets.",
        price: 32.0,
        imageUrl:
          "https://images.unsplash.com/photo-1734067300180-b85cae6a646e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Books",
      },
      {
        name: "Pastria Tote Bag",
        description:
          "A reusable tote bag perfect for carrying pastries and more.",
        price: 18.0,
        imageUrl:
          "https://images.unsplash.com/photo-1624687943971-e86af76d57de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Accessories",
      },
      {
        name: "Pastria T-Shirt",
        description: "A comfy t-shirt featuring the Pastria logo.",
        price: 22.0,
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Apparel",
      },
      {
        name: "Pastria Rolling Pin",
        description: "A wooden rolling pin engraved with the Pastria emblem.",
        price: 28.0,
        imageUrl:
          "https://images.unsplash.com/photo-1587248721300-d7a39ea29585?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Kitchen Gear",
      },
    ]);
    res.status(200).send("successful");
  } catch (err) {
    res.status(400).send(err);
  }
}

// To get all Merch in the database
const getAllMerch = async (req, res) => {
  try {
    const merch = await Merch.find({});
    return res.status(200).json(merch);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching merch items." });
  }
};

// To get specific Merch in the database
const getMerchById = async (req, res) => {
  try {
    const merch = await Merch.findById(req.params.id);
    if (merch) {
      return res.status(200).json(merch);
    } else {
      return res.status(404).json({ message: "Merch not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export default {
  seed,
  getAllMerch,
  getMerchById,
};
