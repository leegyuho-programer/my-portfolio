// import type { Meta, StoryObj } from '@storybook/nextjs';
// import NavBar from './NavBar';
// import { fn } from 'storybook/internal/test';

// const meta = {
//   title: 'Navigation/NavBar', // 경로
//   component: NavBar, // 이 컴포넌트의 스토리북을 작성했다.
//   parameters: {
//     layout: 'centered', // 스토리북에서 어떻게 보이는지 결정 (left로 하면 왼쪽으로 감)
//   },
//   tags: ['autodocs'],
//   // decorators: [
//   //   (Story) => (
//   //     <div style={{ width: '300px', border: '1px solid red' }}>
//   //       <Story />
//   //     </div>
//   //   ),
//   // ],
//   // 전체 width를 주고 싶을 때 컴포넌트 파일에서 아무리 width를 full로 주고 싶어도 storybook에서는 되지 않는다.
//   // 그럴 때 decorators라는 것을 사용하면 된다. 이것을 사용할 때는 파일의 확장자를 ts -> tsx로 해야 한다.
//   argTypes: {
//     showBackButton: {
//       control: 'boolean',
//       description: '뒤로가기 버튼 표시 여부',
//       defaultValue: 'true',
//     },
//     showCloseButton: {
//       control: 'boolean',
//       description: '닫기기 버튼 표시 여부',
//       defaultValue: 'true',
//     },
//     showTitle: {
//       control: 'boolean',
//       description: '페이지 이름 표시 여부',
//       defaultValue: 'true',
//     },
//     title: {
//       control: 'text',
//       description: '페이지 타이틀',
//       defaultValue: '타이틀',
//     },
//     onBackButtonClick: {
//       action: 'clicked',
//       description: '뒤로가기 버튼 클릭 이벤트',
//     },
//     onCloseButtonClick: {
//       action: 'clicked',
//       description: '닫기기 버튼 클릭 이벤트',
//     },
//   },
// } satisfies Meta<typeof NavBar>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     showBackButton: true,
//     showCloseButton: true,
//     showTitle: true,
//     title: '타이틀',
//     onBackButtonClick: fn(),
//     onCloseButtonClick: fn(),
//   },
// };
export default {};
