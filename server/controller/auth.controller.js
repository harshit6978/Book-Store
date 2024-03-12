const { authService } = require("../service");


const authPost = async (req, res) => {
    console.log(req.body);
    try {
        const auth = await authService.authPost(req.body)

        res.status(200).json({
            message: "auth Create",
            auth
        })
    } catch (error) {
        res.status(400).json({
            message: "auth not create",
            error
        })
    }
}

const authGet = async (req, res) => {
    const body = req.body;

    const get = await authService.authGet(body)
    if (!get) return res.status(401).json({ message: "Unauthorized" })

    // 세션
    res.status(200).json({
        message: "auth get",
        get
    });
}


module.exports = { authPost, authGet }