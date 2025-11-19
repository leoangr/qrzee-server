import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowed.includes(file.mimetype)) {
    req.fileValidationError = "File type is not allowed";
    return cb(null, false);
  }
  cb(null, true);
};

export const uploadImage = multer({ storage, fileFilter });
