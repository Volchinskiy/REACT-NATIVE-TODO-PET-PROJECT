import { Document, Model, model, Schema } from "mongoose";

export interface ITodoPost extends Document {
  tittle: string;
  text: string;
  public: Boolean;
  completed: Boolean;
}

const todoPostSchema: Schema = new Schema({
  tittle: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  public: {
    type: Boolean,
    default: true
  },
  completed: {
    type: Boolean,
    defalt: false
  },
});

const TodoPost: Model<ITodoPost> = model("TodoPost", todoPostSchema);
export default TodoPost;
