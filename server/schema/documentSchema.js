import mongoose from 'mongoose';

const documentSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: function () {
      return ("Untitled Document " + _id);
    },
  },
  data: {
    type: Object,
    required: true,
  },
});

const Document = mongoose.model('documents', documentSchema);

export default Document;