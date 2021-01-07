declare interface PlainObject {
    [propName: string]: unknown
}

declare interface BooleanObject {
    [propName: string]: boolean
}

declare interface StringObject {
    [propName: string]: string
}

declare interface NumberObject {
    [propName: string]: number
}

declare module '*.scss' {
    const content: {[key: string]: any}
    export = content
  }
  // less模块声明
  declare module '*.less' {
    const content: { [key: string]: any }
    export default content
  }