// Base64编码函数
function encodeBase64(input: string): string {
  // 将字符串转换为 UTF-8，然后进行 Base64 编码
  return btoa(String.fromCharCode(...new Uint8Array(new TextEncoder().encode(input))))
}

// Base64解码函数
function decodeBase64(encoded: string): string {
  // 解码 Base64 字符串，再将其转换回 UTF-8
  const decoded = atob(encoded)
  const bytes = new Uint8Array(decoded.length)
  for (let i = 0; i < decoded.length; i++) {
    bytes[i] = decoded.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}
/**
 * 校验中国大陆身份证号
 * @param idCard 身份证号
 * @returns True or False
 */
function checkIdCard(idCard: string): string {
  // 身份证号长度校验
  if (idCard.length !== 18) {
    return '请输入18位身份证号码'
  }

  // 前17位数字校验
  for (let i = 0; i < 17; i++) {
    if (!/^\d+$/.test(idCard[i])) {
      return '身份证号码前17位必须为数字'
    }
  }

  // 最后一位校验位计算
  const checkCode = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let sumValue = 0
  for (let i = 0; i < 17; i++) {
    sumValue += Number.parseInt(idCard[i], 10) * checkCode[i]
  }
  const remainder = sumValue % 11
  let checkBit = ''
  switch (remainder) {
    case 0:
      checkBit = '1'
      break
    case 1:
      checkBit = '0'
      break
    case 2:
      checkBit = 'X'
      break
    case 3:
      checkBit = '9'
      break
    case 4:
      checkBit = '8'
      break
    case 5:
      checkBit = '7'
      break
    case 6:
      checkBit = '6'
      break
    case 7:
      checkBit = '5'
      break
    case 8:
      checkBit = '4'
      break
    case 9:
      checkBit = '3'
      break
    case 10:
      checkBit = '2'
      break
  }
  if (idCard[17].toUpperCase() === checkBit) {
    // 最后一位校验位比对
    return ''
  }
  else {
    return '身份证号码不正确'
  }
}
/**
 * 校验中国大陆11位手机号
 * @param mobileNumber 手机号
 * @returns True or False
 */
function checkMobileNumber(mobileNumber: string): string {
  // 手机号长度校验
  if (mobileNumber.length !== 11) {
    return '请输入11位手机号码'
  }
}
export { encodeBase64, decodeBase64, checkIdCard, checkMobileNumber }
