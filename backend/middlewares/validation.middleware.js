import { validationResult } from "express-validator";

export const validate = (req, res, next) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {

        const errors = {};

        result.array().forEach(err => {

            errors[err.path] = err.msg;

        });

        return res.status(400).json({

            success: false,
            message: "All fields are required",
            errors

        });

    }

    next();

}
