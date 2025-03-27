export function getRandomAvatar(size: number = 40): string {
  const randomNumber = Math.floor(Math.random() * 70) + 1; // Pravatar has images from 1 to 70
  return `https://i.pravatar.cc/${size}?img=${randomNumber}`;
}
