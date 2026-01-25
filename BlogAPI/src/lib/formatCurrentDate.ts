export const formatCurrentDate = () => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
  
  return formatted.replace(' at', '');
};