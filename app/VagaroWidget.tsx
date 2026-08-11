"use client";

import { useEffect, useRef } from "react";

const vagaroWidgetScript =
  "https://www.vagaro.com//resources/WidgetPopupLoader/OZqpD3GmE3acT3qmV35y6RuQlXiz3avV34mC2PlFK9lRsiWJcyxapkUcvCu7gevEhAJDXwOapcUbfY?v=GjfjSh79deLANYYdaaE971uzFBT1WGBW107rH4uuXZ0#";

export default function VagaroWidget() {
  const widgetContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetContainer.current;
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = vagaroWidgetScript;
    script.async = true;
    container.appendChild(script);

    const findWidgetTrigger = () =>
      container.querySelector<HTMLElement>("button") ??
      container.querySelector<HTMLElement>('input[type="button"]') ??
      Array.from(container.querySelectorAll<HTMLAnchorElement>("a")).find(
        (link) => !link.href.includes("/pro/"),
      );

    const hideGeneratedTrigger = () => {
      const trigger = findWidgetTrigger();
      trigger?.classList.add("vagaro-widget-trigger-proxy");
      trigger?.setAttribute("aria-hidden", "true");
      return trigger;
    };

    const widgetObserver = new MutationObserver(hideGeneratedTrigger);
    widgetObserver.observe(container, { childList: true, subtree: true });

    const openBookingWidget = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement | null;
      const bookingLink = clickedElement?.closest<HTMLElement>(
        "[data-vagaro-booking]",
      );

      if (!bookingLink) return;

      const widgetTrigger = hideGeneratedTrigger();

      if (!widgetTrigger) return;

      event.preventDefault();
      widgetTrigger.click();
    };

    document.addEventListener("click", openBookingWidget);

    return () => {
      document.removeEventListener("click", openBookingWidget);
      widgetObserver.disconnect();
      script.remove();
    };
  }, []);

  return (
    <div
      ref={widgetContainer}
      className="vagaro vagaro-widget-proxy"
    >
      <span className="vagaro-powered-copy" aria-hidden="true">
        <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>{" "}
        <a href="https://www.vagaro.com/pro/salon-software">
          Salon Software
        </a>
        ,{" "}
        <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>{" "}
        &amp;{" "}
        <a href="https://www.vagaro.com/pro/fitness-software">
          Fitness Software
        </a>
      </span>
    </div>
  );
}
