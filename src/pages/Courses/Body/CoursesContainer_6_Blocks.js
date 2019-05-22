import React from 'react';
import { NavLink } from 'react-router-dom';

const ChoseLang = (props) => {

  return <div className="container_text_blocks">
    <NavLink to={"/PageCourses/" + props.id}>{props.name} </ NavLink>
  </div>
}


const Container_6_Blocks = () => {
  return (
    <div className="container_6_blocks">
      <h2 className="h2_of_6_blocks">Выбирете ваш уровень владения языком</h2>

      <div className="block_1">
        <div className="rect_white_20_block1" />
        <div className="container_text_blocks">
          <ChoseLang name="Начинающий (A1)" id="1" />
          <p>Можете достаточно свободно общаться на английском на отвлеченные темы, способны взаимодействовать с носителями языка без напряжения для каждой из сторон</p>
        </div>
      </div>

      <div className="block_2">
        <div className="rect_white_20_block2" />
        <div className="container_text_blocks">
          <ChoseLang name="Начинающий (A2)" id="2" />
          <p>В состоянии написать связное сообщение<br /> (эссе, письмо) на незнакомую вам тематику</p>
        </div>
      </div>

      <div className="block_3">
        <div className="rect_white_20_block2" />
        <div className="container_text_blocks">
        <ChoseLang name="Продолжающий (B1)" id="3" />
          <p>Свободно смотрите большинство англоязычных телепрограмм: интервью, репортажи, ток-шоу, прямые трансляции</p>
        </div>
      </div>
      <div className="block_4">
        <div className="rect_white_20_block2" />
        <div className="container_text_blocks">
        <ChoseLang name="Продолжающий (B2)" id="4" />
          <p>Способны понять суть сложного текста на конкретную или абстрактную тему, готовы поддержать обстоятельную беседу на английском языке на тему вашей профессиональной специализации.</p>
        </div>
      </div>
      <div className="block_5">
        <div className="rect_white_20_block2">
          {/* <div className="line_for_rect_up_oposit"><div className="line_for_rect_down_oposit" /></div>
            <div className="line_for_rect_up"><div className="line_for_rect_down" /></div> */}
        </div>
        <div className="container_text_blocks">
        <ChoseLang name="Продвинутый (C1)" id="5" />
          <p>Умеете выстраивать ясные и подробные высказывания по широкому кругу вопросов; можете изложить свой взгляд на проблему, указать на преимущества и недостатки различных вариантов ее решения</p>
        </div>
      </div>
      <div className="block_6">
        <div className="rect_white_20_block2" />
        <div className="container_text_blocks">
        <ChoseLang name="Продвинутый (C2)" id="6" />
          <p>Умеете выстраивать ясные и подробные высказывания по широкому кругу вопросов; можете изложить свой взгляд на проблему, указать на преимущества и недостатки различных вариантов ее решения</p>
        </div>
      </div>
    </div>



  )
}

export default Container_6_Blocks