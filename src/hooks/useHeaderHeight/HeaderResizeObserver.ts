type Subscriber = (height: number) => void;

class HeaderResizeObserver {
  private static instance: HeaderResizeObserver;
  private subscribers: Subscriber[];
  private currentHeight;
  private observer: ResizeObserver | null = null;

  private constructor() {
    this.subscribers = [];
    this.currentHeight = 0;
    this.initObserver();
  }

  public static getInstance() {
    if (!HeaderResizeObserver.instance) {
      HeaderResizeObserver.instance = new HeaderResizeObserver();
    }
    return HeaderResizeObserver.instance;
  }

  public subscribe(cb: Subscriber) {
    if (!this.subscribers.includes(cb)) {
      this.subscribers.push(cb);
    }
  }

  public unsubscribe(cb: Subscriber) {
    this.subscribers = this.subscribers.filter((fn) => fn !== cb);
  }

  public notifySubscribers(height: number) {
    this.currentHeight = height;
    this.subscribers.forEach((cb) => cb(height));
  }

  public getCurrentHeight() {
    return this.currentHeight;
  }

  private initObserver() {
    const tryInit = () => {
      const header = document.getElementById("header");
      if (!header) {
        setTimeout(tryInit, 100);
        return;
      }

      const update = () => {
        const height = header.offsetHeight;
        this.notifySubscribers(height);
      };

      this.observer = new ResizeObserver(update);
      this.observer.observe(header);
      update();
    };

    tryInit();
  }
}

export default HeaderResizeObserver;
