import multer from "multer"

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    const allowedExtensions = ["image/png", "image/jpg", "image/jpeg"];
    if (allowedExtensions.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

export const upload = multer({ storage, fileFilter });