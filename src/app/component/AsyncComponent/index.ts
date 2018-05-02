// import * as React from 'react';

// export interface ComponentProps {
//   children?: React.ReactChildren
// }

// // 高阶函数
// export default (importComponent:any) => {
//   return class extends React.Component<ComponentProps,any> {
//     constructor(props:any){
//       super(props);
//       this.state = {
//         component:null,
//       }
//     }
//     async componentDidMount() {
// 			const { default: component } = await importComponent()
// 			this.setState({ component })
// 		}
//     render(){
//       const C = this.state.component
// 			return C
// 				? <C {...this.props} />
// 				: null
//     }
//   }
// }