// const copyToClipboard = str => {
//     const buffer = document.createElement('input');
//     // buffer.style.display = 'none';
//     document.body.appendChild(buffer);
//     buffer.value = str;
//     buffer.select();
//     document.execCommand('copy');
// };

// copyToClipboard('i know what you have done last summer');

const copy_to_Clipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };
  copy_to_Clipboard('JavaScript basic - Exercises, Practice, Solution');
