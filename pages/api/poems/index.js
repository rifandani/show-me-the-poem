import dbConnect from '../../../utils/dbConnect';
import Poem from '../../../models/Poem';

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    // @desc    Get all poems
    // @route   GET /api/poems
    // access   public
    case 'GET':
      try {
        const poems = await Poem.find({});

        res.status(200).json({
          success: true,
          count: poems.length,
          data: poems,
        });
      } catch (err) {
        res.status(500).json({ success: false, error: err });
      }
      break;

    // @desc    Add a poem
    // @route   POST /api/poems
    // access   public
    case 'POST':
      try {
        const poem = await Poem.create(req.body);

        res.status(201).json({
          success: true,
          data: poem,
        });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
  }
};
