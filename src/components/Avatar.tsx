import React from 'react';

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

interface AvatarProps {
    initials: string
}


function Avatar({initials}  : AvatarProps) {
  const backgroundColor = generateRandomColor();
  const fontColor = generateRandomColor();
  const firstTwoLetters = initials.slice(0, 2);

  const avatarStyle = {
    backgroundColor,
    color: fontColor,
  };
  console.log(avatarStyle)

  return (
    <div className="avatar rounded-sm p-2" style={avatarStyle}>
      {firstTwoLetters}
    </div>
  );
}

export default Avatar;