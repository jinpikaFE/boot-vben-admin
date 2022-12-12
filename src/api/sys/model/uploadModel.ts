export interface UploadApiResult {
  message: string;
  code: number;
  data: {
    url: string;
    filename: string;
    size: number;
    mimeType: string;
  };
}
