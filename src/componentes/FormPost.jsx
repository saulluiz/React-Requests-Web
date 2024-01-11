import React, { useState } from "react";
import setPost from "./setPost";
import CardPreview from "./CardPreview";
function FormPost(props) {
  const [autor, setAutor] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [descript, setDescript] = useState("");
  return (
    <div>
      <div className={props.className}>
        <div>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-CorTextForm text-xs font-['Verdana'] mb-2"
                  for="grid-first-name"
                >
                  Autor
                </label>
                <input
                  onChange={(event) => {
                    setAutor(event.target.value);
                  }}
                  name="tentar"
                  class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  maxLength={15}
                  placeholder="Autor do post"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-CorTextForm text-xs font-['Verdana'] mb-2"
                  for="grid-first-name"
                >
                  Título
                </label>
                <input
                  maxLength={19}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                  class="appearance-none block w-full bg-gray-200 text-black border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Lorem..."
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-CorTextForm text-xs font-['Verdana'] mb-2"
                  for="grid-last-name"
                >
                  URL da imagem
                </label>
                <input
                  onChange={(event) => {
                    setImg(event.target.value);
                  }}
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Link da imagem"
                />
              </div>
            </div>
            <div className="flex flex-col font-['Verdana'] uppercase mb-6 ">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                onChange={(event) => {
                  setDescript(event.target.value);
                }}
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="descricao"
                cols="25"
                rows="3"
                maxLength={100}
              ></textarea>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-CorTextForm text-xs font-['Verdana'] mb-2"
                  for="grid-password"
                >
                  Senha
                </label>
                <input
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                />
                <p class="text-CorTextForm text-sm font-['Verdana']">
                  Você vai precisar dessa senha para alterar seus posts a partir
                  do método patch!
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2"></div>
          </form>
          <button
            onClick={() =>
              setPost({
                autor: autor,
                password: password,
                title: title,
                img: img,
                descricao: descript,
              })
            }
            className="bg-corM1 hover:bg-slate-600 text-white font-['Verdana']  hover:text-white m py-2 px-4 border border-corM1 hover:border-transparent rounded"
          >
            Enviar
          </button>
        </div>
        <div>
          <h3 className="font- text-[30px] text-corM1 text-center font-['Verdana'] ">
            Prévia
          </h3>
          <CardPreview
            autor={autor}
            password={password}
            title={title}
            img={img}
            text={descript}
          />
        </div>
      </div>
    </div>
  );
}

export default FormPost;
