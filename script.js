const video = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element and play
const selectMediaStream = async function () {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = captureStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (error) {
    // Handle Error
    console.log('Error:', error);
  }
};

button.addEventListener('click', async () => {
  try {
    // Disable button
    button.disabled = true;

    // Start Picture in Picture
    await video.requestPictureInPicture();

    // Reset button
    button.disabled = false;
  } catch (error) {
    // Handle Error
    console.log('Error:', error);
  }
});

// On Load
selectMediaStream();
