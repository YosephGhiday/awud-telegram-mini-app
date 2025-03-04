import * as crypto from "crypto";

const encryptData = (data: any, key: string) => {
  // Generate a random initialization vector
  const iv = crypto.randomBytes(12); // 12 bytes is recommended for GCM

  // Create a cipher object
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  // Encrypt the data
  let ciphertext = cipher.update(data, "utf8", "base64");
  ciphertext += cipher.final("base64");

  // Get the authentication tag
  const tag = cipher.getAuthTag();

  // Return the encrypted data, IV, and tag
  return {
    ciphertext,
    iv: iv.toString("base64"), // Convert IV to Base64
    tag: tag.toString("base64"), // Convert tag to Base64
  };
};

// Function to decrypt data
const decryptData = (encryptedData: any, key: string) => {
  const { ciphertext, iv, tag } = encryptedData;

  // Create a decipher object
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(iv, "base64") // Convert IV back from Base64
  );

  // Set the authentication tag
  decipher.setAuthTag(Buffer.from(tag, "base64")); // Convert tag back from Base64

  // Decrypt the data
  let decrypted = decipher.update(ciphertext, "base64", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};

export { encryptData, decryptData };
