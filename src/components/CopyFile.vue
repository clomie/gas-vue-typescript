<template>
  <v-card>
    <v-card-title class="headline">ファイルのコピー</v-card-title>
    <v-divider />
    <v-card-text>
      <v-layout column>
        <v-flex xs12>
          <v-text-field
            label="対象ファイル"
            v-model="sourceFile.name"
            @click="pickSourceFile"
            solo
            append-icon="insert_drive_file"
            readonly
            hide-details
          />
        </v-flex>
        <v-flex xs12>
          <v-text-field
            label="作成先フォルダ"
            v-model="targetFolder.name"
            @click="pickTargetFolder"
            solo
            append-icon="folder"
            readonly
            hide-details
          />
        </v-flex>
        <v-flex xs12>
          <v-text-field label="ファイル名" v-model="newFileName" hide-details />
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn
        v-if="copiedFile.id"
        flat
        color="primary"
        :href="copiedFile.url"
        target="_blank"
        >ファイルを開く
        <v-icon right>open_in_new</v-icon>
      </v-btn>
      <v-btn
        v-else
        color="primary"
        @click="execute"
        :disabled="!ready || executing"
        :loading="executing"
        >新規作成</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'copy-file',
  data() {
    return {
      sourceFile: {},
      targetFolder: {},
      newFileName: '',
      executing: false,
      copiedFile: {}
    }
  },
  computed: {
    ready() {
      const sourceFilePicked = this.sourceFile && this.sourceFile.id
      const targetFolderPicked = this.targetFolder && this.targetFolder.id
      return sourceFilePicked && targetFolderPicked && this.newFileName
    },
    params() {
      return {
        source: this.sourceFile,
        target: this.targetFolder,
        fileName: this.newFileName
      }
    }
  },
  methods: {
    async pickSourceFile() {
      const picked = await this.$picker.pickSpreadsheet()
      this.sourceFile = picked[0]
    },
    async pickTargetFolder() {
      const picked = await this.$picker.pickFolder()
      this.targetFolder = picked[0]
    },
    async execute() {
      this.executing = true

      const { file } = await this.$script.copyFile(this.params)
      this.copiedFile = file

      this.executing = false
    }
  }
}
</script>

<style scoped></style>
