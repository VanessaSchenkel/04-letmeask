import { useContext, FormEvent, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";
import { database } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export function NewRoom() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    navigate(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id='page-auth'>
      <aside>
        <img
          src={illustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Crie salas de Q&amp; A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Logo let me ask' />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type='text'
              placeholder='Nome da sala'
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type='submit'>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <a href='#'>Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
}
