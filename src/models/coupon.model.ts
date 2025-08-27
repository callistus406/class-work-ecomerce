import mongoose, {Schema} from "mongoose";

export const couponSchema = new Schema({
  id: { type: Schema.Types.ObjectId, require: true, unique: true },
  code: { type: String, require: true, unique: true },
  type: { type: String, require: true, enum: ["percentage", "fixed"] },
  value:{type: Number, require:true, min:1},
  minOrderValue:{type:Number, require:true,min:1 },
  validFrom: { type: Date, require: false },
  validTo: { type: Date, require: false },
  usageLimit: { type: Number, require: false, min: 1 },
  usageCount: { type: Number, require: false, default: 0 },
  active: { type: Boolean, default: true },
  appliedToMerchants: [{ type: Schema.Types.ObjectId, ref: "Merchant" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const couponModel = mongoose.model("Coupon", couponSchema);
