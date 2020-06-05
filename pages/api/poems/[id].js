import dbConnect from '../../../utils/dbConnect';
import Poem from '../../../models/Poem';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    // @desc    Get a single poem
    // @route   GET /api/poems/:id
    // access   public
    case 'GET':
      try {
        const poem = await Poem.findById(id);

        if (!poem) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: poem });
      } catch (err) {
        res.status(500).json({
          success: false,
          error: `Server error: ${err}`,
        });
      }
      break;

    // @desc    Update a single poem
    // @route   PUT /api/poems/:id
    // access   public
    case 'PUT':
      try {
        const poem = await Poem.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!poem) {
          return res.status(400).json({ success: false });
        }

        res.status(201).json({ success: true, data: poem });
      } catch (err) {
        res.status(400).json({ success: false, error: `Server error: ${err}` });
      }
      break;

    // @desc    Delete a poem
    // @route   DELETE /api/poems/:id
    // access   public
    case 'DELETE':
      try {
        const poem = await Poem.deleteOne({ _id: id });

        if (!poem) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (err) {
        res.status(500).json({ success: false, error: `Server error: ${err}` });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
