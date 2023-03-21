const jwt = require("jsonwebtoken");

function loginRequired(req, res, next) {
  // request 헤더로부터 authorization bearer 토큰을 받음.
  const userToken = req.headers["authorization"]?.split(" ")[1];

  // 이 토큰은 jwt 토큰 문자열이거나, "null", undefined
  // 토큰이 "null" 일 경우, login_required 가 필요한 서비스 사용을 제한
  if (!userToken || userToken === "null") {
    res.status(401).json({
      result: "Unauthorized-approach",
      reason: "회원만 이용할 수 있는 서비스입니다.",
    });
    return;
  }

  // 해당 token 이 정상적인 token인지 확인
  try {
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const jwtDecoded = jwt.verify(userToken, secretKey);

    const userId = jwtDecoded.userId;
    req.currentUserId = userId;

    next();
  } catch (error) {
    res.status(403).json({
      result: "Forbidden-approach",
      reason: "인증되지 않은 정보 입니다.",
    });

    return;
  }
}
module.exports = { loginRequired };