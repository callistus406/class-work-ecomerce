import { payoutModel } from "../models/paystack.model";
import { Paystack } from "../utils/paystack";

export class PaymentRepository {
  static async CreatePayment(paymentData: any) {
    const payment = new payoutModel(paymentData);
    return await payment.save();
  }
}
