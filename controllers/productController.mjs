import Product from "../models/productModel.mjs";

// Our Mock Data Seed
async function seed(req, res) {
  try {
    await Product.create([
      {
        name: "Chocolate Croissant",
        description: "A buttery, flaky pastry filled with rich chocolate.",
        category: "Croissants",
        price: 5.99,
        imageUrl:
          "https://images.unsplash.com/photo-1718897266472-5b7229ebdd3d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Vanilla Cream Puff",
        description: "A delicate puff pastry filled with smooth vanilla cream.",
        category: "Cream Puffs",
        price: 3.99,
        imageUrl:
          "https://images.unsplash.com/photo-1733486249979-2db54b268986?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Apple Cinnamon Roll",
        description: "A warm, gooey cinnamon roll with apple filling.",
        category: "Cinnamon Rolls",
        price: 4.49,
        imageUrl:
          "https://images.unsplash.com/photo-1645995575875-ea6511c9d127?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Lemon Meringue Tart",
        description: "A zesty lemon filling topped with fluffy meringue.",
        category: "Tarts",
        price: 6.99,
        imageUrl:
          "https://images.unsplash.com/photo-1534148206-f085ba17015a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Blueberry Muffin",
        description: "Freshly baked muffin filled with juicy blueberries.",
        category: "Muffins",
        price: 2.99,
        imageUrl:
          "https://images.unsplash.com/photo-1722251172903-cc8774501df7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Raspberry Danish",
        description: "A buttery Danish pastry filled with tangy raspberry jam.",
        category: "Danishes",
        price: 3.79,
        imageUrl:
          "https://images.unsplash.com/photo-1624300654594-517c05bacb8d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Chocolate Chip Cookies",
        description: "Soft and chewy cookies loaded with chocolate chips.",
        category: "Cookies",
        price: 1.99,
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1670895802097-c9749ab2dc5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Peach Galette",
        description: "A rustic pastry with fresh peaches and a buttery crust.",
        category: "Galettes",
        price: 5.49,
        imageUrl:
          "https://images.unsplash.com/photo-1591538017406-0d85d0803530?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Pecan Pie",
        description: "A rich and sweet pie filled with pecans and syrup.",
        category: "Pies",
        price: 7.99,
        imageUrl:
          "https://images.unsplash.com/photo-1598360482137-fe99f7c5d0f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Strawberry Shortcake",
        description:
          "A light sponge cake layered with fresh strawberries and whipped cream.",
        category: "Cakes",
        price: 8.49,
        imageUrl:
          "https://images.unsplash.com/photo-1558234469-50fc184d1cc9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Chocolate Fudge Cake",
        description:
          "A rich and moist chocolate cake topped with fudge frosting.",
        category: "Cakes",
        price: 9.99,
        imageUrl:
          "https://images.unsplash.com/photo-1736109850901-a7e3869400b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Cinnamon Sugar Donut",
        description: "A sweet donut coated with cinnamon sugar.",
        category: "Donuts",
        price: 2.49,
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1676573295464-cd20bfd68744?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Almond Biscotti",
        description: "Crunchy, twice-baked Italian cookies with almonds.",
        category: "Biscotti",
        price: 3.29,
        imageUrl:
          "https://images.unsplash.com/photo-1685397166172-0308e96ee012?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Raisin Scone",
        description: "A buttery scone with plump raisins, perfect with tea.",
        category: "Scones",
        price: 3.59,
        imageUrl:
          "https://images.unsplash.com/photo-1678025227914-d8cb55aa6cb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Maple Pecan Danish",
        description: "A flaky Danish pastry with maple syrup and pecans.",
        category: "Danishes",
        price: 4.79,
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675871810369-f6b5322f9643?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Honey Baked Brioche",
        description: "A sweet, soft brioche pastry drizzled with honey.",
        category: "Brioche",
        price: 4.29,
        imageUrl:
          "https://images.unsplash.com/photo-1552056413-b8b5eed0170b?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ]);
    res.send("successful").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

// To get all the entries in the database
const getEntries = async (req, res) => {
  try {
    const foundEntries = await Product.find({});
    res.status(200).json(foundEntries);
  } catch (error) {
    res.send(error).status(400);
  }
};

// To get specific entry in the database
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export default { seed, getEntries, getProductById };
