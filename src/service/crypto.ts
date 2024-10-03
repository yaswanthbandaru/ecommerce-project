require('dotenv').config()
const cryptoencryption = require('crypto')
const algorithm = 'aes-256-cbc'

interface EncryptedDate {
    iv: string;
    encryptedData: string;
}

export function encrypt(text: string): EncryptedDate {
    const secret_key = process.env.SECRET_TEXT 
    const secret_iv = process.env.CRYPTO_IV 
    const key = Buffer.from(secret_key, 'hex')
    const iv =  Buffer.from(secret_iv, 'hex')
    let cipher = cryptoencryption.createCipheriv(algorithm, Buffer.from(key), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
}

export function decrypt(text: EncryptedDate): string {
    const secret_key = process.env.SECRET_TEXT 
    const secret_iv = process.env.CRYPTO_IV 
    const key = Buffer.from(secret_key, 'hex')
    const iv =  Buffer.from(secret_iv, 'hex')
    let encryptedText = Buffer.from(text.encryptedData, 'hex')
    let decipher = cryptoencryption.createDecipheriv(algorithm, Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}
