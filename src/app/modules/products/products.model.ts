import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
    },
    individualRating: {
      type: String,
    },
    avgRating: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: Object,
      properties: {
        brand: { type: String },
        model: { type: String },
        Specification: { type: String },
        Type: { type: String },
      },
    },
    reviews: {
      type: [String],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

const UserModel = mongoose.model('Product', productSchema);

export default UserModel;
