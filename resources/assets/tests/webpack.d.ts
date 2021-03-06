declare module '*.vue' {
  import Vue from 'vue'

  export default Vue
}

declare module '*.styl' {
  export default {} as Record<string, string>
}

declare module '*.scss' {
  export default {} as Record<string, string>
}

declare module '*.png' {
  export default ''
}
