class Log {
  /**
   * @type string
   */
  id;

  /**
   * @type string
   */
  title;

  /**
   * @type string
   */
  description;

  /**
   * @type Date
   */
  createdAt;

  /**
   * @type Array<string>
   */
  labels;

  /**
   * @type Array<Log> // Only id and title
   */
  linkedLogs;

  /**
   * @interface Attachment
   */
  attachment;
}
