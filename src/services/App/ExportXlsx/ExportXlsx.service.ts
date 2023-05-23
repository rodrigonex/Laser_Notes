import XLSX from "xlsx";
import * as FileSystem from "expo-file-system";
import NotesServices from "../Notes/Notes.service";
import { Notes } from "@src/utils/Interfaces/Notes";
import moment from "moment";

export default class ExportXlsxService extends NotesServices {
    filterNotes: Notes[] = [];

    async generete(initial: Date, end: Date) {
        const notes = await this.getAll();
        if (typeof notes !== "string") {
            if (notes.length > 0) {
                /*
                this.filterNotes = notes.filter((note: Notes) => {
                    const date_procedure = moment(note.date_procedure);
                    const startDate = moment(initial);
                    const endDate = moment(end);

                    if (
                        date_procedure.isAfter(startDate) &&
                        date_procedure.isBefore(endDate)
                    ) {
                        console.log(note);
                        return note;
                    }
                });
                */ this.filterNotes = notes;
            }
        }
        if (this.filterNotes.length > 0) {
            convertArrayToXLSAndDownload(this.filterNotes, "output");
        }
    }
}

function generateXLSContent(xlsData: any) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(xlsData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const content = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
    return content;
}

const convertArrayToXLSAndDownload = async (
    dataArray: Notes[],
    filename: string
): Promise<void> => {
    console.log(dataArray);
    const xlsContent: any = generateXLSContent(dataArray); // Função para gerar o conteúdo XLS usando a biblioteca de sua escolha.

    const fileUri = `${FileSystem.documentDirectory}${filename}.xls`;

    try {
        await FileSystem.writeAsStringAsync(fileUri, xlsContent, {
            encoding: FileSystem.EncodingType.UTF8,
        });

        const contentUri = await FileSystem.getContentUriAsync(fileUri);

        if (contentUri) {
            FileSystem.downloadAsync(
                contentUri,
                FileSystem.documentDirectory + `${filename}.xls`
            )
                .then(({ uri }) => {
                    console.log("File downloaded to:", uri);
                    // Realize ações adicionais aqui, como exibir uma mensagem de sucesso.
                })
                .catch((error) => {
                    console.log("Error downloading file:", error);
                    // Trate o erro adequadamente, como exibindo uma mensagem de erro.
                });
        } else {
            console.log("Error getting content URI.");
            // Trate o erro adequadamente, como exibindo uma mensagem de erro.
        }
    } catch (error) {
        console.log("Error saving file:", error);
        // Trate o erro adequadamente, como exibindo uma mensagem de erro.
    }
};
