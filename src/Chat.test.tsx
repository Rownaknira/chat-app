import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { FETCH_MESSAGES, Dog } from './dog';

const mocks = [
  {
    request: {
      query: FETCH_MESSAGES,
    },
    result: {
      data: [
        {
          message: "Hello, I'm Russell. <br />How can I help you today?", sendTime: "08:55", isSent: true, user: { id: 2, name: "Russell", avatar: "Russell.png" }
        },
        {
          message: "Hi, Russell <br />I need more information about Developer Plan.", sendTime: "08:56", isSent: true, user: { id: 1, name: "Joyse", avatar: "Joyse.png"}
        },
        {
          message: "Are we meeting today? <br />Project has been already finished and I have results to show you. ", sendTime: "08:57", isSent: true, user: { id: 3, name: "Sam", avatar: "Sam.png" }
        },
        {
          message: "Well I am not sure. <br />I have results to show you.", sendTime: "08:59", isSent: true, user: { id: 1, name: "Joyse", avatar: "Joyse.png"}
        },
        {
          message: "Hey, can you receive my chat?", sendTime: "09:02", isSent: false, user: { id: 1, name: "Joyse", avatar: "Joyse.png" }
        }, 
      ],
    },
  },
];

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Dog name="Buck" />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');
});