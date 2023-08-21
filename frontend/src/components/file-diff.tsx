import { createSignal, type Component, onMount } from "solid-js"
import { GetFileDiff } from "../../wailsjs/go/app/App"
import FilePathInput from "./file-path-input"

const FileDiff: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center p-5 rounded-lg shadow-lgw bg-gray-300 gap-5 w-full"></div>
  )
}

export default FileDiff