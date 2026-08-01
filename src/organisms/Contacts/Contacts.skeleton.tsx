import { Section } from "../../molecules/Section/Section";
import { Skeleton } from "../../atoms/components/skeleton/Skeleton";
import "./Contacts.skeleton.scss";

export default function ContactsSkeleton() {
  return (
    <Section className="contacts-skeleton" ariaLabel="Загрузка секции с контактами">
      <div className="contacts-box">
        <div className="contact-box-skeleton">
          <Skeleton width={750} height={60} />
          <Skeleton width={800} height={26} />
          <div className="contacts-box-skeleton__cta">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} width={250} height={51} variant="rectangular" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
