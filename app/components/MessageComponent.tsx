interface Message {

}

interface Props {
  message: Message;
}


export default function MessageComponent({}: Props) {
  return (
    <div>
      <p>message component</p>
    </div>
  );
}
