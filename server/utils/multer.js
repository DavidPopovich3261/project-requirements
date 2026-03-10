import multer from "multer"

const storage = multer.diskStorage({
    destination: "data/uploads/",
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
})

const fileFilter = (req, file, cb) => {
    const allowedExtensions = ["image/png", "image/jpg", "image/jpeg"];
    if (allowedExtensions.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

export const upload = multer({ storage, fileFilter, limits: { fileSize: 1024 * 1024 * 0.2 } });