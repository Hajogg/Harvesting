export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}

export const HarvestFormErrorMessages = [
  new ErrorMessage('name', 'required', 'Ein Name muss angegeben werden'),
  new ErrorMessage('comment', 'required', 'Ein Name muss angegeben werden'),
  new ErrorMessage('location', 'required', 'Ein Ort muss eingegeben werden'),
  new ErrorMessage('action', 'required', 'Eine Aktion muss eingegeben werden'),
  new ErrorMessage('published', 'required', 'Es muss ein Erscheinungsdatum angegeben werden')
];