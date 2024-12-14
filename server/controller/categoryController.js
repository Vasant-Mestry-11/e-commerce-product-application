import slugify from "slugify";
import Category from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(401).send({ message: 'Name is required' })

    const existingCategory = await Category.findOne({ name })
    if (existingCategory) {
      return res.status(200).send({ success: true, message: 'Category already exists' })
    }

    const category = await new Category({ name, slug: slugify(name) }).save()
    res.status(201).send({
      success: true,
      message: "New category created",
      category
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      error,
      message: 'Error in Category'
    })
  }
}