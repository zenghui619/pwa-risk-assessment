function calculateRisk() {
    const friendPreference = Number(document.getElementById('friendPreference').value);
    const busyLevel = Number(document.getElementById('busyLevel').value);
    const ddlCount = Number(document.getElementById('ddlCount').value);
    const placePreference = Number(document.getElementById('placePreference').value);
    const distance = Number(document.getElementById('distance').value);

    // 计算风险得分
    let riskScore = 0;

    // 根据问题打分
    riskScore += (11 - friendPreference); // 越喜欢分数越低
    riskScore += busyLevel; // 越忙分数越高
    riskScore += ddlCount; // DDL越多分数越高
    riskScore += (11 - placePreference); // 越喜欢分数越低
    riskScore += distance; // 路途越远分数越高

    // 计算风险级别
    let riskMessage;
    if (riskScore >= 25) {
        riskMessage = "放鸽子风险高，建议不去！";
    } else if (riskScore >= 10) {
        riskMessage = "放鸽子风险中等，建议权衡再决定，实在要去记得提示风险。";
    } else {
        riskMessage = "风险低，按时参加活动吧！";
    }

    // 显示风险得分和风险消息
    document.getElementById('result').innerText = `风险得分: ${riskScore}。 ${riskMessage}`;
}
