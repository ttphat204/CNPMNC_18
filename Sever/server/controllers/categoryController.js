// E:\emart\server\controllers\categoryController.js
import { category } from '../models/DanhMucSP.js';

const createCategory = async (req, res) => {
  try {
    const { supplierId, name } = req.body;
    const newCategory = new category({ name, supplier: supplierId });
    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCategoriesBySupplier = async (req, res) => {
  try {
    const { supplierId } = req.params;
    const categories = await category.find({ supplier: supplierId });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await category.findByIdAndDelete(id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, supplierId } = req.body;
    const updatedCategory = await category.findByIdAndUpdate(id, { name, supplier: supplierId }, { new: true });
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { createCategory, getCategoriesBySupplier, deleteCategory, updateCategory, getAllCategories };
