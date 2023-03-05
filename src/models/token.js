class token {
    static async hasToken(req, res, next) {
        let token = req.header("Authorization");
        return (!token) ? res.status(403).json({ message: "Access Denied" }) : token;
    }

    static async bearerToken(req, res, next) { 
        let token = req.header("Authorization");
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        return token;
    }
}