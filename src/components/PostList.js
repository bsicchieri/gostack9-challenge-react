import React, { Component } from 'react';

import PostItem from './PostItem';

import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.jpeg';
import avatar3 from '../assets/avatar3.png';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Camila Morais',
          avatar: avatar2
        },
        date: '10 de Ago de 2019',
        content: 'Oi, gente! Em qual desafio do Bootcamp GoStack vocês estão?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Pedro Albuguergue',
              avatar: avatar3
            },
            date: '10 de Ago de 2019',
            content:
              'Estou no quinto e você?'
          },
          {
            id: 1,
            author: {
              name: 'Camila Morais',
              avatar: avatar2
            },
            date: '10 de Ago de 2019',
            content:
              'Estou no terceiro!! Ansiosa para começar o próximo módulo!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Patricia Reis',
          avatar: avatar1
        },
        date: '09 de Ago de 2019',
        content:
          'Alguém está fazendo o Bootcamp GoStack? Preciso de um@ parceir@, please!!!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Camila Morais',
              avatar: avatar2
            },
            date: '09 de Ago de 2019',
            content:
              'Também estou fazendo, amiga! Podemos formar uma dupla, o que acha?'
          },
          {
            id: 3,
            author: {
              name: 'Patricia Reis',
              avatar: avatar1
            },
            date: '10 de Ago de 2019',
            content:
              'Ai que ótimo! Vou te chamar no chat'
          },
          {
            id: 2,
            author: {
              name: 'Pedro Albuguergue',
              avatar: avatar3
            },
            date: '10 de Ago de 2019',
            content:
              'Também preciso de um@ parceir@, me avisem se souberem de alguém!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Pedro Albuguergue',
          avatar: avatar3
        },
        date: '09 de Ago de 2019',
        content:
          'Estou vendendo ingressos para a festa de amanhã, alguém ainda precisa?',
        comments: [
          {
            id: 3,
            author: {
              name: 'Patricia Reis',
              avatar: avatar1
            },
            date: '10 de Ago de 2019',
            content:
            'Eu preciso de dois, como faço para pegar com você?'
          },
          {
            id: 2,
            author: {
              name: 'Pedro Albuguergue',
              avatar: avatar3
            },
            date: '09 de Ago de 2019',
            content:
              'Eu levo aí na sua casa hoje mesmo',
          },
          {
            id: 1,
            author: {
              name: 'Camila Morais',
              avatar: avatar2
            },
            date: '09 de Ago de 2019',
            content:
              'Eu também quero um! Passa aqui que já te pago'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;