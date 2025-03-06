export function getExactTime({
  hour,
  minute,
}: {
  hour: string;
  minute: string;
}) {
  const date = new Date();
  const segundos = date.getSeconds();
  const milisegundos = date.getMilliseconds();
  const time = `${hour}:${minute}:${segundos}.${milisegundos}`;
  console.log(time);
  return time;
}
