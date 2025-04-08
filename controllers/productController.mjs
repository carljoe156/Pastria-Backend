import Product from "../models/productModel.mjs";

// Our Mock Data Seed
async function seed(req, res) {
  try {
    await Product.create([
      {
        name: "Product One",
        description:
          "lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Type One",
        price: 100,
        imageUrl:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Product Two",
        description:
          "lorem Ipsum is simply dummy text of the printing and typesetting industry",
        category: "Test Two",
        price: 150,
        imageUrl:
          "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Product Three",
        description:
          " lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam non proident.",
        category: "Test Three",
        price: 90,
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1661546038828-20acff2c69aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Product Four",
        description:
          " lorem ipsum je lope elit sed diam non proident nolo moor as wer you tee writing town.",
        category: "Test Four",
        price: 200,
        imageUrl:
          "https://images.unsplash.com/photo-1606509769472-7660d4a478ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Product Five",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "Test Five",
        price: 250,
        imageUrl:
          "https://images.unsplash.com/photo-1603349136288-95d87bd0a268?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Product Six",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut viverra erat. Nulla facilisi.",
        category: "Test Six",
        price: 180,
        imageUrl:
          "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Product Seven",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies lacinia nibh, et mollis nulla fermentum ac.",
        category: "Test Seven",
        price: 130,
        imageUrl:
          "https://images.unsplash.com/photo-1612903910048-36cb9e119674?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Product Eight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, arcu in gravida dictum, felis tortor tincidunt ipsum.",
        category: "Test Eight",
        price: 220,
        imageUrl:
          "https://images.unsplash.com/photo-1606715895281-ccdf0143f198?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
